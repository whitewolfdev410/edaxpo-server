<?php

namespace App\Services\Crud;


class ItemProvider {

    public function __construct() {

    }

    public function byId($id, ItemProviderOptions $options): mixed
    {
        $model = $options->model;
        $item = $model::findOrFail($id);
        return $item;
    }
}
