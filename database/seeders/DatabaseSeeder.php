<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $rootUser = User::where('email', 'admin@edaxpo.com')->first();

        if (!$rootUser) {
            \App\Models\User::factory()->create([
                'first_name' => 'William',
                'last_name' => 'Peralta',
                'email' => 'admin@edaxpo.com',
                'password' => bcrypt('12345678'),
            ]);
        }


        \App\Models\Spot::factory(10)->create();

    }
}
