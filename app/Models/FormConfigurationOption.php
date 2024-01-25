<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\FormConfiguration;

class FormConfigurationOption extends Model
{
    //use SoftDeletes;
    public $table = 'form_configuration_options';
    
    protected $fillable = [
        'form_configuration_id',
        'name',
        'value',
        'checked'
    ];

    
    public function configuration(): BelongsTo
    {
        return $this->belongsTo(FormConfiguration::class);
    }
}