<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $table = 'answers';
    protected $fillable = ['answer', 'flag', 'question_id'];
    public function Question()
    {
        return $this->belongsTo('App\Question', 'question_id');
    }
}
