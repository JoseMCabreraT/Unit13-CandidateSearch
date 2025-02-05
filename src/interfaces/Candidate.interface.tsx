// TODO: Create an interface for the Candidate objects returned by the API

export default interface Candidates {
    readonly FullName: string | null;
    readonly Username: string | null;
    readonly Location: string | null;
    readonly Avatar: string | null;
    readonly Email: string | null;
    readonly html_url: string | null;
    readonly Company: string | null;

}//interface Candidates
