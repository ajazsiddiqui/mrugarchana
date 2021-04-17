<div class="slide-form open">
	<a href="#" id="slide-btn">Request a callback <span class="close_form">X</span></a>

	<div class="row bottomform-holder">
	<div class="col-md-12">
		<form class="row" id="contact-form" name="contact-form" action="send-contact.php" method="post">
			<div class="col-md-9 col-12 pull-left row m-0">
				
					<div class="col-md-3 col-sm-12 pull-left">
						<label for="name">Name <small>*</small>
						</label>
						<input id="name" name="name" value="" class="sm-form-control required" required="" type="text" />
						<input name="source" value="<?= @empty($_GET['utm_source'])?'microsite':$_GET['utm_source']; ?>" type="hidden" />
					</div>
					<div class="col-md-3 col-sm-12 pull-left">
						<label for="email">Email Address <small>*</small>
						</label>
						<input id="email" name="email" value="" class="sm-form-control required" required="" type="email">
						</div>
					<div class="col-md-3 col-sm-12 pull-left">
							<label for="phone">Phone Number <small>*</small>
							</label>
							<input id="phone" name="phone" value="" class="sm-form-control required" required="" type="tel">
							</div>
					<div class="col-md-3 col-sm-12 pull-left">
								<label for="budget">Enquiring For <small>*</small>
								</label>
								<select name="budget" id="budget" class="sm-form-control budget required" required="">
									<option value="">Select Configuration</option>
									<option value="1.5">1.5 BHK</option>
									<option value="2">2 BHK</option>
									<option value="2.5">2.5 BHK</option>
								</select>
							</div>
			</div>
						<div class="col-md-2 col-12 pull-left m-0">
							<div class="col-md-12 form-btn">
								<label class="blank">&nbsp;</label>
								<button type="submit" class="button submit-btn nomargin" id="contact-submit">Request a callback </button>
							</div>
						</div>


						</form>
					</div>
					</div>
				</div>	