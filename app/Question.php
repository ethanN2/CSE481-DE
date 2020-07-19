<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = "questions";
    protected $fillable = ['question'];

    /**
     * Get the answers for the blog post.
     */
    public function answers()
    {
        return $this->hasMany('App\Answer', 'question_id', 'id');
    }
}
