import { Button } from "../components"

const Hero = () => {
    return (
        <section>
            <div className="containers">
                <Button title={"Daftar Sekarang"} />
                <Button extraClass={`!bg-[#F2F2F2] !text-black`} title={"About Us"} />

            </div>
        </section>
    )
}

export default Hero