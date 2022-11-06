<?php

namespace App\Http\Controllers;

use App\Models\StudentSkillset;
use Illuminate\Http\Request;

class StudentSkillsetController extends Controller
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
            'skillsNeed' => StudentSkillset::all()
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
        $skillset = StudentSkillset::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "Student skillset need created successfully!",
            'skillset' => $skillset
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StudentSkillset  $studentSkillset
     * @return \Illuminate\Http\Response
     */
    public function show(StudentSkillset $studentSkillset)
    {
        return response()->json([
            'status' => true,
            'skillsetNeed' => $studentSkillset
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StudentSkillset  $studentSkillset
     * @return \Illuminate\Http\Response
     */
    public function edit(StudentSkillset $studentSkillset)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StudentSkillset  $studentSkillset
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StudentSkillset $studentSkillset)
    {
        $studentSkillset->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Student Skillset Updated successfully!",
            'skillset' => $studentSkillset
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StudentSkillset  $studentSkillset
     * @return \Illuminate\Http\Response
     */
    public function destroy(StudentSkillset $studentSkillset)
    {
        $studentSkillset->delete();

        return response()->json([
            'status' => true,
            'message' => "Student Skillset deleted successfully!",
        ], 200);
    }
}
