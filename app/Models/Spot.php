<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Spot extends Model
{
    use SoftDeletes;
    use  HasFactory;

    protected $fillable = [
        'title',
        'desc',
        'body',
        'cover',
        'data',
        'author_id',
        'dies_on',
        'score',
        'views',
        'likes',
        'status',
    ];

    protected $casts = [
        'meta_data' => 'array',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function contactRequests(): HasMany
    {
        return $this->hasMany(ContactRequest::class);
    }
}
