<?php

namespace App\Http\Controllers;

use App\Models\UserLocation;
use Illuminate\Http\Request;

class UserLocationsController extends Controller
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
            'locations' => UserLocation::all()
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
        $studentLocation = UserLocation::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "User Locations Created successfully!",
            'studentLocation' => $studentLocation
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserLocation  $userLocation
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,UserLocation $userLocation)
    {
        return response()->json([
            'status' => true,
            'location' => $userLocation
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserLocations  $userLocations
     * @return \Illuminate\Http\Response
     */
    public function edit(UserLocation $userLocations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserLocations  $userLocations
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserLocation $userLocation)
    {
        $userLocation->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Student location Updated successfully!",
            'studentLocation' => $userLocation
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserLocations  $userLocations
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserLocation $userLocation)
    {
        $userLocation->delete();

        return response()->json([
            'status' => true,
            'message' => "Student Location Deleted successfully!",
        ], 200);
    }
}
