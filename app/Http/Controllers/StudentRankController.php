<?php

namespace App\Http\Controllers;

use App\Models\StudentRank;
use Illuminate\Http\Request;

class StudentRankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => true,
            'studentRank' => StudentRank::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $studentRank = StudentRank::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "Student rank created successfully!",
            'studentRank' => $studentRank
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StudentRank  $studentRank
     * @return \Illuminate\Http\Response
     */
    public function show(StudentRank $studentRank)
    {
        return response()->json([
            'status' => true,
            'studentRank' => $studentRank
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StudentRank  $studentRank
     * @return \Illuminate\Http\Response
     */
    public function edit(StudentRank $studentRank)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StudentRank  $studentRank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StudentRank $studentRank)
    {
        $studentRank->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Student rank Updated successfully!",
            'studentRank' => $studentRank
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StudentRank  $studentRank
     * @return \Illuminate\Http\Response
     */
    public function destroy(StudentRank $studentRank)
    {
        $studentRank->delete();

        return response()->json([
            'status' => true,
            'message' => "Student rank deleted successfully!",
        ], 200);
    }
}
