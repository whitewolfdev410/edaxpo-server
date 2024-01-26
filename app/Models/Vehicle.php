<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vehicle extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'type',
        'brand',
        'model',
        'marchi_id',
        'modelli_id',
        'yearFrom',
        'yearTo',
        'active',
        'engine',
        'true_engine',
        'power',
        'kw',
        'images',
        'modelImages',
        'category',
        'ports',
        'version',
        'production'
    ];
}