<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class phone extends Model
{
    use HasFactory;
    protected $table = 'phone';
    protected $primaryKey = 'phone_id';
    protected $fillable = [
    	'phone_id',
        'phone_type',
        'ph_number',
        'person_id'
    ];
}
