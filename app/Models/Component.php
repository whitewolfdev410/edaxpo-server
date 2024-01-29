<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Component extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'label',
        'active',
        'image_url',
        'component_id',
    ];

    /**
     * Get the parent component of the component.
     */
    public function parent()
    {
        return $this->belongsTo(Component::class);
    }
}
