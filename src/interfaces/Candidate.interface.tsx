// TODO: Create an interface for the Candidate objects returned by the API

export default interface Candidate {
    readonly login: string;
    readonly name: string;
    readonly location: string;
    readonly avatar_url: string;
    readonly email: string;
    readonly html_url: string;
    readonly company: string;

}//interface Candidates
