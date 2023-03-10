import {Skill} from "./skill.model";
import {Project} from "./project.model";
import {Certification} from "./certification.model";
export interface Resume {
    first_name: string;
    last_name: string;
    email: string;
    mobile_no: number | null;
    address: string;
    tenth_school_name: string;
    sslc_percent: number | null;
    twelfth_school_name: string;
    hsc_percent: number | null;
    college: string;
    college_percent: number | null;
    skills: Skill[];
    projects: Project[];
    certifications: Certification[];
    linkedIn_profile: string;
    hackerRank_profile: string;
    gitHub_profile: string;
}
