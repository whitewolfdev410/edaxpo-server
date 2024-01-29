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
        return file_get_contents(__DIR__."/../../../resources/website/form/config.json");
    }


}