<?php

namespace App\Http\Controllers;

use App\Models\SkillsetNeed;
use Illuminate\Http\Request;

class SkillsetNeedController extends Controller
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
            'skillsNeed' => SkillsetNeed::all()
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
        $skillset = SkillsetNeed::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "Company skillset need created successfully!",
            'skillset' => $skillset
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SkillsetNeed  $skillsetNeed
     * @return \Illuminate\Http\Response
     */
    public function show(SkillsetNeed $skillsetNeed)
    {
        return response()->json([
            'status' => true,
            'skillsetNeed' => $skillsetNeed
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SkillsetNeed  $skillsetNeed
     * @return \Illuminate\Http\Response
     */
    public function edit(SkillsetNeed $skillsetNeed)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SkillsetNeed  $skillsetNeed
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SkillsetNeed $skillsetNeed)
    {
        $skillsetNeed->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Company Skillset Updated successfully!",
            'skillset' => $skillsetNeed
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SkillsetNeed  $skillsetNeed
     * @return \Illuminate\Http\Response
     */
    public function destroy(SkillsetNeed $skillsetNeed)
    {
        $skillsetNeed->delete();

        return response()->json([
            'status' => true,
            'message' => "Company Skillset deleted successfully!",
        ], 200);
    }
}
