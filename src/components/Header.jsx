import Circle from "@/components/Circle";

const Header = () => {
  return (
    <header className='header'>
        <h1>Your Result</h1>

        <Circle>
        <span>76</span>
        <p>of 100</p>
        </Circle>

        <h2>Great</h2>
        <p>
        Your performance exceed 65% of the people conducting the test here!
        </p>
    </header>
  )
}

export default Header