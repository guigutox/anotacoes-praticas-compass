//SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract Votar {

    address public admin;

    struct Candidate{
        uint id;
        string name;
        uint voteCount;
        bool isElected;
    }

    struct Voter{
        bool voted;
        uint vote;
        bool authorized;
    }

    mapping(address => Voter) public voters;
    mapping(uint => Candidate) public candidates;

    uint public candidatesCount;
    uint public totalVotes;
    uint[] public candidateIds;

    constructor(){
        admin = msg.sender;
    }

    modifier onlyAdmin(){
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    function addCandidate(string memory _name) public onlyAdmin{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, false);
        candidateIds.push(candidatesCount);
    }

    function authorize(address _user) public onlyAdmin{
        voters[_user].authorized = true;
    }

    function vote(uint _candidateId) public{
        require(voters[msg.sender].authorized, "You are not authorized to vote");
        require(!voters[msg.sender].voted, "You have already voted.");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate.");

         voters[msg.sender].voted = true;
         voters[msg.sender].vote = _candidateId;

         candidates[_candidateId].voteCount++;
         totalVotes++;
    }

    function getWinner() public view returns (string memory winnerName, uint winnerVoteCount){
        uint winningVoteCount = 0;
        uint winningCandidateId = 0;

        for (uint i = 0; i < candidateIds.length; i++){
            uint candidateId = candidateIds[i];
            if(candidates[candidateId].voteCount > winningVoteCount){
                winningVoteCount = candidates[candidateId].voteCount;
                winningCandidateId = candidateId;

            }
        }

        winnerName = candidates[winningCandidateId].name;
        winnerVoteCount = winningVoteCount;
    }



    function end() public onlyAdmin{
        selfdestruct(payable (admin));
    }

}