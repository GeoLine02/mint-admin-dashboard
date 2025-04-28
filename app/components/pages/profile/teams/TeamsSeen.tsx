import Card from "@/app/components/ui/Card";
import MemberInvitationForm from "./_components/InviteTeamMembers/MemberInvitationForm";
import TeamMembersTable from "./_components/TeamMembers/TeamMembersTable";

const TeamsSeen = () => {
  return (
    <Card className="px-[30px] py-[50px] w-full space-y-8">
      <div className="space-y-2.5 w-full">
        <h1 className="text-2xl font-bold">Team management</h1>
        <p className="text-[#89868D]">
          Manage your team members and their account permissions here.
        </p>

        <hr className="border-[#DBDCDE]" />
      </div>
      <div className="flex gap-12">
        <div className="space-y-2.5 ">
          <h1 className="text-xl font-bold">Invite Team Members</h1>
          <p className="text-[#89868D] max-w-[264px]">
            Get your projects up and running faster by inviting your team to
            collaborate.
          </p>
        </div>
        <MemberInvitationForm />
      </div>

      <hr className="border-[#DBDCDE]" />
      <div className="flex">
        <div className="space-y-2.5 ">
          <h1 className="text-xl font-bold">Invite Team Members</h1>
          <p className="text-[#89868D] max-w-[264px]">
            Get your projects up and running faster by inviting your team to
            collaborate.
          </p>
        </div>
        <TeamMembersTable />
      </div>
    </Card>
  );
};

export default TeamsSeen;
