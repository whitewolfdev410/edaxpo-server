<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class SpotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'desc' => fake()->text(),
            'body' => fake()->text(),
            'cover' =>  fake()->imageUrl(),
            'author_id' => 1,
            'dies_on' => now(),
            'score' => 0,
            'views' => 0,
            'likes' => 0,
            'data' => '[]',
            'meta_data' => '[]',
            'status' => 'published',
        ];
    }

}
