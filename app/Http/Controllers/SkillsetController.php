<?php

namespace App\Http\Controllers;

use App\Models\Skillset;
use Illuminate\Http\Request;

class SkillsetController extends Controller
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
            'skillset' => Skillset::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $skillset = Skillset::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "Skillset Created successfully!",
            'post' => $skillset
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Skillset  $skillset
     * @return \Illuminate\Http\Response
     */
    public function show(Skillset $skillset)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Skillset  $skillset
     * @return \Illuminate\Http\Response
     */
    public function edit(Skillset $skillset)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Skillset  $skillset
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Skillset $skillset)
    {
        $skillset->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Skillset Updated successfully!",
            'post' => $skillset
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Skillset  $skillset
     * @return \Illuminate\Http\Response
     */
    public function destroy(Skillset $skillset)
    {
        $skillset->delete();

        return response()->json([
            'status' => true,
            'message' => "Skillset Deleted successfully!",
        ], 200);
    }
}
