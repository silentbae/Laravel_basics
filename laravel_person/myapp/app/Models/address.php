<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class address extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'address';
    protected $primaryKey = 'address_id';
    protected $fillable = [
    	'address_id',
        'house_name',
        'location',
        'land_mark',
        'person_id',
        'address_type_id'
    ];
}
