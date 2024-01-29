<?php

namespace App\Http\Controllers;

use App\Models\FormConfiguration;
use App\Models\FormConfigurationOption;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\JsonResponse;

class FormConfiguratioController extends Controller
{
    public function get(Request $request, $key)
    {
        $response = FormConfiguration::where('spot_type', $key)->orderBy('ordern', 'ASC')->get();
        $rows = [];
        foreach($response as $r) {
            $item = $r;
            $item['options'] = FormConfigurationOption::where("form_configuration_id", $r->id)->get();
            $rows[]= $item;
        }

        $tabs = [];
        for($i = 0; $i <= 4; $i++) {
            $tmp  = [];
            for($j = 0; $j < (count($rows) - 2); $j++) {
                if($rows[$j]->group == $i)
                    $tmp []= $response[$j];
            }
            $tabs []= $tmp;
        }
        return $tabs;
    }


}