export default function MessageBox(props){
const {error} = props
    return(<div className={`alert alert-${props.variant || 'info'}`}>
        {props.children}
    </div>)
}
 /* props.children returns the property of the page that synchronies with wat u call in the next page for example if {error} returns the default property of error in that page */

 
//  props.variant allows you to give different style to thesame character dependind on the variant you call