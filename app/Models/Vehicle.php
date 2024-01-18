<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vehicle extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'type',
        'category',
        'ports',
        'brand',
        'model',
        'version',
        'production',
        'year',
        'engine',
        'power',
        'images',
    ];
}
