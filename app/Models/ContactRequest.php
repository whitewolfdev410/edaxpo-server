<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactRequest extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'spot_id',
        'author_id',
        'type',
        'email',
        'phone',
    ];

    public function spot(): BelongsTo
    {
        return $this->belongsTo(Spot::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
