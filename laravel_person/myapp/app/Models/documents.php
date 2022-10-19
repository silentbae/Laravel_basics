<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class documents extends Model
{
    use HasFactory;
    protected $table = 'documents';
    protected $primaryKey = 'document_type_id';
    protected $fillable = [
    	'document_id',
        'person_id',
        'document_type',
        'document_name',
        'upload_date',
        'expiry_date',
        'is_active',
        'created_date',
        'modified_date',
        'created_at',
        'updated_at',
    ];
}
