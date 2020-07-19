<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = Question::all();
        return response()->json([
            'data' => $questions,
            'message' => 'get data successfully!'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $question = new Question([
            'question' => $request->get('question')
        ]);
        $question->save();
        return response()->json([
            'data' => $question,
            'message' => 'create data succcessfully!'
        ])
            ->withCallback($request->input('callback'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $question_id
     * @return \Illuminate\Http\Response
     */
    public function show($question_id)
    {
        $question = Question::findorfail($question_id);
        $question->answers;
        return response()->json([
            'data' => $question,
            'message' => 'get question ' . $question_id . ' successfully!'
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $question_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $question_id)
    {
        $question = Question::findorfail($question_id);

        $question->question = $request->get('question');

        $question->save();

        return response()->json([
            'data' => $question,
            'message' => 'update question successfully!'
        ])
            ->withCallback($request->input('callback'));;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $question_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($question_id)
    {
        $question = Question::findorfail($question_id);
        $question->delete();
        return response()->json([
            'message' => 'deleted question!'
        ]);
    }
}
