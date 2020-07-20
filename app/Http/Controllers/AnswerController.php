<?php

namespace App\Http\Controllers;

use App\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $question_id)
    {
        // check answer maximum
        if ($this->checkAnswers($question_id)) {
            return response()->json([
                'message' => 'max answers !! You can`t create more answer'
            ], 403);
        }
        $answer = new Answer([
            'answer' => $request->get('answer'),
            'flag' => $request->get('flag'),
            'question_id' => $question_id
        ]);

        $answer->save();

        return response()->json([
            'data' => $answer,
            'message' => 'create new answer successfully!!'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $answer = Answer::findorfail($id);

        $answer->answer = $request->answer;
        $answer->flag = $request->flag;

        $answer->save();
        return response()->json([
            'message' => 'update answer successfully!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $answer = Answer::findorfail($id);
        $answer->delete();
        return response()->json([
            'message' => 'delete answer successfully!!'
        ]);
    }
    
    public function checkAnswers($question_id)
    {
        $answers = Answer::all()->where('question_id', 'like', $question_id);
        if($answers->count() > 5) return 0;
        return 1;
    }
}
