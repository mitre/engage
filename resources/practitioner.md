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

<br>
<details>
<summary>
<b>Step 0: Assess knowledge of your adversaries and your organization.</b>
</summary>
<br>
<p>
The defender should <a href="{{ site.baseurl }}/activities/SAC0004/">Develop a Threat Model</a> of both the target adversary and their organization. A target adversary represent a threat that historically targets your organization or organizations like yours. The target adversary may represent a gap in the your threat intelligence, or they may be known to historically utilize TTPs that represent a gap in your current defenses. Regardless of the reason, you should have solid understanding of both the adversary and their own organization. 
</p>
</details>
<br>

<details>
<summary>
<b>Step 1: Determine your strategic goal.</b>
</summary>
<br>
<p>
Using the previously developed <a href="{{ site.baseurl }}/activities/SAC0004/">Threat Model</a>, you must now identify your <a href="{{ site.baseurl }}/activities/SAC0001/">Strategic Goal</a>. Every operation will have a unique Strategic Goal. This goal might be to <a href="{{ site.baseurl }}/activities/SAC0001/">Expose</a> adversaries on the network to reveal previously unknown threats, to <a href="{{ site.baseurl }}/goals/EGO0002/">Affect</a> adversaries by imposing a negative resource cost, or to <a href="{{ site.baseurl }}/goals/EGO0003/">Elicit</a> adversary TTPs by encouraging the adversary to reveal new or more advanced behaviors or capabilities. This goal will drive every action you take from this point forward. 
</p>
</details>

<br>

<details>
<summary>
<b>Step 2: Determine what you want your adversary to do.</b>
</summary>
<br>
<p>
Guided by the chosen <a href="{{ site.baseurl }}/activities/SAC0001/">Strategic Goal</a> and using the previously developed <a href="{{ site.baseurl }}/activities/SAC0004/">Threat Model</a>, you can use the Engage <a href="{{ site.baseurl }}/attack_mapping/">ATT&CK® Mappings</a> to examine the various Tactics and Techniques associated with the adversary. For every Technique, we have identified one or more adversary vulnerabilities that are exposed, and the Engagement activity you can utilize to take advantage of the vulnerability. Using these mappings, you can begin to create the operational <a href="{{ site.baseurl }}/activities/SAC0003/">Storyboard</a>. This outline should help identify what activities you will use to encourage the adversary to take the desired actions.
</p>
</details>

<br>

<details>
<summary>
<b>Step 3: Determine what you want them to perceive.</b>
</summary>
<br>
<p>
Still guided by the chosen <a href="{{ site.baseurl }}/activities/SAC0001/">Strategic Goal</a>, and using the previously developed <a href="{{ site.baseurl }}/activities/SAC0004/">Threat Model</a>, you can continue to expand the <a href="{{ site.baseurl }}/activities/SAC0003/">Storyboard</a> by creating the <a href="{{ site.baseurl }}/activities/SAC0002/">Personas</a> and related story elements required to control what is communicated to the adversary. While you cannot control what the adversary thinks, you can use the developed <a href="{{ site.baseurl }}/activities/SAC0004/">Threat Model</a>, <a href="{{ site.baseurl }}/activities/SAC0001/">Strategic Goal</a>, and <a href="{{ site.baseurl }}/activities/SAC0003/">Storyboard</a> to shape what the adversary will find in the environment. 
</p>
</details>

<br>

<details>
<summary>
<b>Step 4: Determine presentation avenues for your adversary.</b>
</summary>
<br>
<p>
Now you must decide what the adversary will find in the environment. You should examine the various <a href="{{ site.baseurl }}/approaches">Approaches</a> and <a href="{{ site.baseurl }}/activities">Activities</a> described under their selected Engagement Goal in the <a href="{{ site.baseurl }}/matrix">Matrix</a> to identify which activities you will utilize. You must determine how these activities will be implemented. Additionally, you must determine if a given activity will be revealed to or concealed from the adversary. For example, you may reveal a <a href="{{ site.baseurl }}/activities/EAC0005/">Decoy Document</a> to the adversary while concealing the fact that you <a href="{{ site.baseurl }}/activities/EAC0014/">Manipulated Software</a> to serve as a tripwire to detect adversary movement.
</p>
</details>

<br>

<details>
<summary>
<b>Step 5: Determine the exit criteria.</b>
</summary>
<br>
<p>
In order to maintain operational safety and to ensure that operations remain focused on the chosen <a href="{{ site.baseurl }}/activities/SAC0001/">Strategic Goal</a>, you must identify key <a href="{{ site.baseurl }}/activities/SAC0005/">Exit Criteria</a>. Sometimes, these events include the successful completion of the agreed upon goals. Other times, these events may signify the operation has reached a hard stop. This is often because future operational safety cannot be guaranteed or because events have occurred that outweigh the agreed upon acceptable risk. Finally, it may just be that if the adversary operates any longer, they may learn something we don't want them to know. It is important to engage stakeholders across various roles and skillsets to identify these criteria. 
</p>
</details>

<br>

<details>
<summary>
<b>Step 6: Execute your operation.</b>
</summary>
<br>
<p>
Deploy the monitoring, engagement, and analysis activities. And wait. Note: depending on the specifics of the engagement, an operation may take time!

*Note: Steps 7-9 may happen continuously throughout an operation to ensure incremental refinements*
</p>
</details>

<br>

<details>
<summary>
<b>Step 7: Turn raw data into actionable intelligence.</b>
</summary>
<br>
<p>
You must gather all of the various data outputs. These may be in the form of logs, PCAP, NetFlow, etc. You should feed this data into an analytics pipeline to ensure that the data can be used to provide actionable intelligence. This intelligence may be in the form of new IOCs, TTPs, etc. 
</p>
</details>

<br>

<details>
<summary>
<b>Step 8: Feed back intelligence.</b>
</summary>
<br>
<p>
Any intelligence produced during the operation should be used to <a href="{{ site.baseurl }}/activities/SAC0009/">Inform the Threat Model</a> and <a href="{{ site.baseurl }}/activities/SAC0007/">Refine Operational Activities</a>. If applicable, this intelligence should inform, not only future operations, but also the larger defensive strategy of your organization. 
</p>
</details>

<br>

<details>
<summary>
<b>Step 9: Analyze your successes & failures.</b>
</summary>
<br>
<p>
Finally, it is essential to examine all of the operational activities to assess successes and failures. The results of these assessments should <a href="{{ site.baseurl }}/activities/SAC0007/">Refine Future Operation Activities</a>. Additionally, it is important to perform a team <a href="{{ site.baseurl }}/activities/SAC0006/">Hotwash</a> to assess overall communication and team efficiency. 
</p>
</details>

<br>

<details>
<summary>
<b>Step 10: Repeat!</b>
</summary>
</details>
<br>
