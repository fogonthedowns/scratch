class String
  def is_upper?
    self == self.upcase
  end

  def is_lower?
    self == self.downcase
  end

  ## returns <MatchData "some string">
  # !#<MatchData "jz"> -> false
  # !!#<MatchData "jz"> -> true
  # match returns matchdata or nil
  # !nil vs !!nil
  # https://ruby-doc.org/core-2.1.1/Regexp.html#class-Regexp-label-Character+Properties

  def is_alphanum?
    !!match(/^[[:alnum:]]+$/)
  end

  def is_alpha?
    !!match(/^[[:alpha:]]+$/)
  end
end

