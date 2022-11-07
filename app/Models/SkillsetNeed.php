<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillsetNeed extends Model
{
    use HasFactory;

    public $table = 'company_skillset_need';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'company_id',
        'skillset_id',
        'total_years_experience'
    ];
}
