<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::firstOrCreate(
            ['email' => 'strider@striderwhite.com'],
            [
                'email' => 'strider@striderwhite.com',
                'name' => 'Strider',
                'password' => bcrypt(env('PASSWORD_SEED'))
            ]
        );

    }
}
