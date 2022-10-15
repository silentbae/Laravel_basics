<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class conf_address_type extends Model
{
    use HasFactory;
    protected $table = 'conf_address_type';
    protected $primaryKey = 'address_type_id';
    protected $fillable = [
    	'address_type_id',
        'address_type_value',
        'address_type_code',
        'is_active',
        'created_date',
    ];

}
