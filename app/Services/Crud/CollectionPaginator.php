<?php

namespace App\Services\Crud;

class CollectionPaginator {

    public function __construct() {
        
    }

    public function toArray(CollectionPaginatorOptions $options): array
    {
        $query = $options->model::query();
        $count = $query->count();
        $page = $options->page;
        $limit = $options->itemsPerPage;

        $items = $query
            ->take($limit)
            ->offset(($page - 1) * $limit)
            ->get();

        return [
            'hydra:totalItems' => $count,
            'hydra:member' =>  $items,
            'hydra:view' => [],
        ];
    }
}
