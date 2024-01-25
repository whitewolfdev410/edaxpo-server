<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\FormConfigurationOption;

class FormConfiguration extends Model
{
    //use SoftDeletes;
    public $table = 'form_configuration';
    
    protected $fillable = [
        'name',
        'label',
        'type',
        'default',
        'value',
        'required',
        'class',
        'showOnValue',
        'group',
        'score',
        'description',
        'info',
        'spot_type',
        'ordern',
        'min',
        'max'
    ];

    public function options(): HasMany
    {
        return $this->hasMany(FormConfigurationOption::class);
    }

}