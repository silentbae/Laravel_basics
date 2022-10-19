<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class conf_document_types extends Model
{
    use HasFactory;
    protected $table = 'conf_document_types';
    protected $primaryKey = 'document_type_id';
    protected $fillable = [
    	'document_type_id',
        'document_type_value',
        'document_type_code',
        'is_active',
        'created_date',
        'modified_date',
    ];
}
