<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'per_page' => 'required|integer',
            'page_number' => 'required|integer'
        ]);

        $defaultPagination = [10, 15, 20, 25];
        foreach ($defaultPagination as $key => $value) {
            if ($request->get('per_page') == $value) {
                $questions = Question::paginate($request->get('per_page'), ['*'], 'page', $request->get('page_number'));
                return response()->json([
                    'data' => $questions,
                    'message' => 'get data successfully!'
                ]);
            }
        }

        return response()->json([
            'message' => 'set per_page = 10 || 15 || 20 || 25'
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|string',
            'level' => 'required|string',
        ]);

        $defaultLevel = ['easy', 'medium', 'hard', 'expert'];
        foreach ($defaultLevel as $key => $value) {
            if ($request->get('level') == $value) {
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
        }

        return response()->json(['message' => 'level only set 4 values "easy", "medium", "hard", "expert"'],400);
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

    public function update(Request $request, $question_id)
    {
        $request->validate([
            'question' => 'required|string',
            'level' => 'required|string'
        ]);

        $question = Question::findorfail($question_id);
        
        $defaultLevel = ['easy', 'medium', 'hard', 'expert'];
        foreach ($defaultLevel as $key => $value) {
            if ($request->get('level') == $value) {
                $question->question = $request->get('question');

                $question->save();
        
                return response()->json([
                    'data' => $question,
                    'message' => 'update question successfully!'
                ])
                    ->withCallback($request->input('callback'));;
            }
        }

        return response()->json(['message' => 'level only set 4 values: ["easy", "medium", "hard", "expert"]'],400);
    }

    public function destroy($question_id)
    {
        $question = Question::findorfail($question_id);
        $question->delete();
        return response()->json([
            'message' => 'deleted question!'
        ]);
    }

    public function search(Request $request)
    {
        $request->validate([
            'query' => 'required'
        ]);

        $query = Question::where('quesiton', 'LIKE', '%'.$request->get('query').'%');

        return response()->json([
            'data' => $query,
            'message' => 'find question successfully!!'
        ]);
    }
}
