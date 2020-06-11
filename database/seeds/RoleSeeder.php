<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(['Admin', 'Clerk', 'User'] as $role) {
            \Spatie\Permission\Models\Role::create(['name' => $role]);
        }
    }
}
