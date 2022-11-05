<?php

namespace App\Http\Controllers;

use App\Models\UserExperience;
use Illuminate\Http\Request;

class UserExperienceController extends Controller
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
            'experience' => UserExperience::all()
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
        $studentExperience = UserExperience::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "User Experience Created successfully!",
            'studentExperiences' => $studentExperience
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserExperience  $userExperience
     * @return \Illuminate\Http\Response
     */
    public function show(UserExperience $userExperience)
    {
        return response()->json([
            'status' => true,
            'location' => $userExperience
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserExperience  $userExperience
     * @return \Illuminate\Http\Response
     */
    public function edit(UserExperience $userExperience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserExperience  $userExperience
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserExperience $userExperience)
    {
        return response()->json([
            'status' => true,
            'message' => "Student experience Updated successfully!",
            'userExperience' => $userExperience
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserExperience  $userExperience
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserExperience $userExperience)
    {
        $userExperience->delete();

        return response()->json([
            'status' => true,
            'message' => "Student Experience Deleted successfully!",
        ], 200);
    }
}
