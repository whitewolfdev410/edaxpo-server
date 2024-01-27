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
        return  ["qweqwe"];
        $response = FormConfiguration::where('spot_type', $key)->orderBy('ordern', 'ASC')->get();
        for($i = 0; $i < count($response) - 1;$i++) {
            $response['options'] = FormConfigurationOption::where("form_configuration_id", $response[$i]->id)->get();
        }
        return $response;
    }


}
