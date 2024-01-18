<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Organization extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'group_id',
        'group_name',
        'billing_info',
        'website',
        'avatar',
        'cover',
        'capture',
        'primary_address',
        'primary_address_lat',
        'primary_address_lng',
        'active',
        'authorized',
    ];

    public function group(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'group_id');
    }
}
