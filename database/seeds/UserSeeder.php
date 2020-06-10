<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Lucas',
            'email' => 'lucas@email.com',
            'password' => '123'
        ]);
    }
}
