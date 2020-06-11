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
        $user = \App\Models\User::create([
            'name' => 'Lucas',
            'email' => 'lucas@email.com',
            'password' => '123'
        ]);
        $user->roles()->attach(\Spatie\Permission\Models\Role::where('name', 'Admin')->first()->id);
        $user->givePermissionTo(\Spatie\Permission\Models\Permission::where('name', 'Excluir chamado')->first());
    }
}
