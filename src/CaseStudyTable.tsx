const CaseStudyTable = () => {
    return (  
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Water</th>
                    <th>Air</th>
                    <th>Food</th>
                    <th>Energy</th>
                    <th>Habitat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <div className="td-container">
                        <td>They mainly get their water from their food/pray, but they can occasionally drink seawater while feeding. They also live in the water, and hunt in it too.</td>
                        <td>To get their air, they breathe through nostrils on the top of their head called "blowholes", and go to the top of the surface to use their nostrils. Their oxygen is produced by plants such as phytoplankton.</td>
                        <td>Whales normally are carnivores, eating smaller fish. They eat their prey in the water, which is also where they live.</td>
                        <td>Whales usually get their energy, like most other animals, by eating their food.</td>
                        <td>Whales live in the water, in small groups of around 30 whales called a pod.</td>
                    </div>
                </tr>
            </tbody>
        </table>
    );
}
 
export default CaseStudyTable;