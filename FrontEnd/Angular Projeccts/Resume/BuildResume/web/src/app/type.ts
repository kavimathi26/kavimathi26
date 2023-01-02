type ts = {
    first_name: string | null | undefined;
    last_name: string | null | undefined;
    email: string | null | undefined;
    mobile_no: string  | null | undefined;
    address: string | null | undefined;
    // personal_details: PersonalDetails[],
    tenth_school_name: string | null | undefined;
    tenth_start_year: string | null | undefined;
    tenth_end_year: string | null | undefined;
    sslc_percent: string  | null | undefined;
    twelfth_school_name: string | null | undefined;
    twelfth_start_year: string | null | undefined;
    twelfth_end_year: string | null | undefined;
    hsc_percent: string  | null | undefined;
    college: string | null | undefined;
    college_degree: string | null | undefined;
    college_branch: string | null | undefined;
    college_start_year: string | null | undefined;
    college_end_year: string | null | undefined;
    college_percent: string  | null | undefined;
    // skills: any[];
    skills: string[];
    areas_of_interest: string[];
    languages_known: string[];
    projects: string[];
    certifications: string[];
    linkedIn_profile: string | null | undefined;
    hackerRank_profile: string | null | undefined;
    gitHub_profile: string | null | undefined;
    career_objective: string | null | undefined;
    profile_picture: File |string | null | undefined;
}

export default ts;