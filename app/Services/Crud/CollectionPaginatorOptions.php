<?php

namespace App\Services\Crud;

use Illuminate\Database\Eloquent\Model;

class CollectionPaginatorOptions
{
    public int $itemsPerPage;
    public int $page;
    public function __construct(public string $model) { }
}
