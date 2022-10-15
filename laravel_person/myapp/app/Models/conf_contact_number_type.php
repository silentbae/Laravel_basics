<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class conf_contact_number_type extends Model
{
    use HasFactory;
    protected $table = 'conf_contact_number_type';
    protected $primaryKey = 'contact_number_type_id';
    protected $fillable = [
    	'contact_number_type_id',
        'contact_number_type_value',
        'contact_number_type_code',
        'is_active',
        'created_date'
    ];
}
