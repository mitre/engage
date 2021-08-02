---

layout: default
title: Using MITRE Engage
custom_css: default

---

## My Goal: To Run an Adversary Engagement Operation

### Summary 
Using the [Matrix]({{ site.baseurl }}/matrix) view, you can explore how the various [Goals]({{ site.baseurl }}/goals), [Approaches]({{ site.baseurl }}/approaches), and [Activities]({{ site.baseurl }}/activities) help you to design and structure your adversary engagement operations. Engage provides the cyber defender with a common language for planning and discussing engagement operations.

### Learn More
Whether you are planning to run a single operation for research purposes or intend to undertake a series of operations to generate a continuous threat intelligence feed, MITRE Engage can help. 

If you have not already, [click here]({{ site.baseurl }}/resources/structure) for a full exploration of the structure and terminology you will find in Engage.

Now that you understand the basic terms and structure of Engage, let's see one example of how a defender could use this framework to plan and run an operation. This process was adapted from the process described by Barton Whaley in the [Art and Science of Military Deception](https://www.amazon.com/Military-Deception-Intelligence-Information-Operations/dp/1608075516).


<u><b>Step 0: Assess knowledge of your adversaries and your organization.</b></u>

As the defender, you should [Develop a Threat Model]({{ site.baseurl }}/activities/SAC0004/) of both the target adversary and your organization. A target adversary represents a threat that historically targets your organization or organizations like yours. The target adversary may represent a gap in your threat intelligence, or they may be known to historically utilize TTPs that represent a gap in your current defenses. Regardless of the reason, you should have a solid understanding of both the adversary and your own organization. 

You can use [ATT&CK® Groups](https://attack.mitre.org/groups/) to understand which Tactics and Techniques are historically associated with a given APT. TTPs are expensive for an APT to change or expand. Therefore, they are considered to be relatively constant across campaigns. You can take advantage of this consistency to anticipate how an adversary may intend to operate.

<u><b>Step 1: Determine your strategic goal.</b></u>

Using the previously developed [Threat Model]({{ site.baseurl }}/activities/SAC0004/), you must now identify your [Strategic Goal]({{ site.baseurl }}/activities/SAC0001/). Every operation will have a unique Strategic Goal. This goal might be to [Expose]({{ site.baseurl }}/goals/EGO0001/) adversaries on the network to reveal previously unknown threats, to [Affect]({{ site.baseurl }}/goals/EGO0002/) adversaries by imposing a negative resource cost, or to [Elicit]({{ site.baseurl }}/goals/EGO0003/) adversary TTPs by encouraging the adversary to reveal new or more advanced behaviors or capabilities. This goal will drive every action you take from this point forward. 

<u><b>Step 2: Determine what you want your adversary to do.</b></u>

Guided by the chosen [Strategic Goal]({{ site.baseurl }}/activities/SAC0001/) and using the previously developed [Threat Model]({{ site.baseurl }}/activities/SAC0004/), you can use the Engage [ATT&CK® Mappings]({{ site.baseurl }}/attack_mappings) to examine the various Tactics and Techniques associated with the adversary. For every Technique, we have identified one or more adversary vulnerabilities that are exposed, and the Engagement activity you can utilize to take advantage of the vulnerability. Using these mappings, you can begin to create the operational [Storyboard]({{ site.baseurl }}/activities/SAC0003/). This outline should help identify what activities you will use to encourage the adversary to take the desired actions.

<u><b>Step 3: Determine what you want them to perceive.</b></u>

Still guided by the chosen [Strategic Goal]({{ site.baseurl }}/activities/SAC0001/), and using the previously developed [Threat Model]({{ site.baseurl }}/activities/SAC0004/), you can continue to expand the [Storyboard]({{ site.baseurl }}/activities/SAC0003/) by creating the [Personas]({{ site.baseurl }}/activities/SAC0002/) and related story elements required to control what is communicated to the adversary. While you cannot control what the adversary thinks, you can use the developed [Threat Model]({{ site.baseurl }}/activities/SAC0004/), [Strategic Goals]({{ site.baseurl }}/activities/SAC0001/), and [Storyboard]({{ site.baseurl }}/activities/SAC0003/) to shape what the adversary will find in the environment. 

<u><b>Step 4: Determine presentation avenues for your adversary.</b></u>

Now you must decide what the adversary will find in the environment. You should examine the various [Approaches]({{ site.baseurl }}/approaches) and [Activities]({{ site.baseurl }}/activities) described under their selected Engagement Goal in the [Matrix]({{ site.baseurl }}/matrix) to identify which activities you will utilize. You must determine how these activities will be implemented. Additionally, you must determine if a given activity will be revealed to or concealed from the adversary. For example, you may reveal a [Decoy Document]({{ site.baseurl }}/activities/EAC0005/) to the adversary while concealing the fact that you [Manipulated Software]({{ site.baseurl }}/activities/EAC0014/) to serve as a tripwire to detect adversary movement.

<u><b>Step 5: Determine the exit criteria.</b></u>

In order to maintain operational safety and to ensure that operations remain focused on the chosen [Strategic Goal]({{ site.baseurl }}/activities/SAC0001/), you must identify key [Exit Criteria]({{ site.baseurl }}/activities/SAC0005/). Sometimes, these events include the successful completion of the agreed upon goals. Other times, these events may signify the operation has reached a hard stop. This is often because future operational safety cannot be guaranteed or because events have occurred that outweigh the agreed upon acceptable risk. Finally, it may just be that if the adversary operates any longer, they may learn something we don't want them to know. It is important to engage stakeholders across various roles and skillsets to identify these criteria. 

<u><b>Step 6: Execute your operation.</b></u>

Deploy the monitoring, engagement, and analysis activities. And wait. Note: depending on the specifics of the engagement, an operation may take time!

*Note: Steps 7-9 may happen continuously throughout an operation to ensure incremental refinements*

<u><b>Step 7: Turn raw data into actionable intelligence.</b></u>

You must gather all of the various data outputs. These may be in the form of logs, PCAP, NetFlow, etc. You should feed this data into an analytics pipeline to ensure that the data can be used to provide actionable intelligence. This intelligence may be in the form of new IOCs, TTPs, etc. 

<u><b>Step 8: Feed back intelligence.</b></u>

Any intelligence produced during the operation should be used to [Inform the Threat Model]({{ site.baseurl }}/activities/SAC0009/) and [Refine Operational Activities]({{ site.baseurl }}/activities/SAC0007/). If applicable, this intelligence should inform, not only future operations, but also the larger defensive strategy of your organization. 

<u><b>Step 9: Analyze your successes & failures.</b></u>

Finally, it is essential to examine all of the operational activities to assess successes and failures. The results of these assessments should [Refine Future Operation Activities]({{ site.baseurl }}/activities/SAC0007/). Additionally, it is important to perform a team [Hotwash]({{ site.baseurl }}/activities/SAC0006/) to assess overall communication and team efficiency. 

<u><b>Step 10: Repeat!</b></u>
