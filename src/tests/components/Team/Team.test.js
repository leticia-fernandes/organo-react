import { render, screen } from '@testing-library/react';
import Team from '../../../components/Team';

describe('Team component', () => {
  const team = {
    name: "Team",
    primaryColor: "#FFFFFF",
    secondaryColor: "#bbbbbb",
  };
  test('renders the Team name', () => {
    render(
      <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
      />
    );
    const teamName = screen.getByRole('heading', {level: 3});
    expect(teamName).toBeInTheDocument();
  });
});
