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
    public function index(Request $request)
    {
        if (!$request->get('per_page')) {
            return response()->json([
                'message' => 'need per_page to fetch!!',
                'hint' => 'set per_page = 10 || 15 || 20 ||25'
            ]);
        }
        switch ($request->get('per_page')) {
            case 10:
                $questions = Question::paginate(10);
                break;
            case 15:
                $questions = Question::paginate(15);
                break;
            case 20:
                $questions = Question::paginate(20);
                break;
            case 25:
                $questions = Question::paginate(25);
                break;
            default:
                $questions = Question::paginate(10);
            break;
        }
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
        if (!$request->get('question'))
            return response()->json([
                'message' => 'need require quesition'
            ], 404);
        if (!$request->get('level'))
            return response()->json([
                'message' => 'need require level'
            ], 404);
        $question = new Question([
            'question' => $request->get('question'),
            'level' => $request->get('level')
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
